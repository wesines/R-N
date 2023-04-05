import {useEffect,useState}  from 'react'
import { ReturnBook } from "./ReturnBook";
import BookModel from '../../../models/BookModel';

import {SpinnerLoading} from '../../utils/SpinnerLoading'
export const Carousel = () => {
const [books,setBooks]=useState<BookModel[]>([]);
const [isLoading,setIsLoading]=useState(true);
const [httpError,setHttpError]=useState(null);
    useEffect(()=>{
   const fetchBooks=async()=>{
    const baseUrl:string="http://localhost:8081/api/books";
    const url: string = `${baseUrl}?page=0&size=9`;
    const response=await fetch(url);
    
    if (!response.ok) {
        console.log("error");
        throw new Error('Something went wrong!');
    }
    const responseJson = await response.json();
   // const responseJson = resp._embedded.books;

   //convert buffer type to base64
   function bufferToBase64(buffer:any):string {
       let binary = '';
       let bytes = new Uint8Array(buffer);
       let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }
//    function bufferToBase64 (arr: Uint8Array): string{
//                 return window.btoa(
//                         Array(arr.length)
//                             .fill('')
//                             .map((_, i) => String.fromCharCode(arr[i]))
//                             .join('')
//                     );
//                     }

const loadedBooks:BookModel[]=[];
for(const key in responseJson){
    
    const data = responseJson[key].img['data']
    //   console.log(responseJson);
    
  // const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
        
 let  base64String = bufferToBase64(data);
 console.log("base",base64String);
      let base64Flag = "data:image/png;base64,";
     let  img=base64Flag+base64String;
     
      loadedBooks.push({
            id:responseJson[key].id,
            title:responseJson[key].title,
            author:responseJson[key].author,
            description:responseJson[key].description,
            copies:responseJson[key].copies,
            copiesAvailable:responseJson[key].copiesAvailable,
            category:responseJson[key].category,
            img:img,
        })
   

        setBooks(loadedBooks)
        setIsLoading(false)

    }

   }

   fetchBooks().catch((error:any)=>{
    setIsLoading(false)
    setHttpError(error.message)
   })
   },[]);
   

   if(isLoading){
    return(
       <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    
   }
   return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>
 
                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {
                        
                        books.slice(0, 3).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))
                        }
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {books.slice(3, 6).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))
                        }
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        {books.slice(6, 9).map(book => (
                                <ReturnBook book={book} key ={book.id} />
                            ))
                        }
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
 
            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <ReturnBook book={books[7]} key={books[7].id}/>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
            </div>
        </div>
    );
}

