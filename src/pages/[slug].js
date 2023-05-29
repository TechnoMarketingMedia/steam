import axios from 'axios';
import HeaderThree from "../components/header/HeaderThree";
import Image from 'next/image';

import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";



const Category = ({ slug,partsData, name }) => {


    return (
        <>
            <HeadMeta metaTitle="Home Three"/>

            <HeaderThree />
            
            <h1 className='text-center mt-5 fs-1 fw-light'>{name}</h1>
            <div className="progress">
                <div className="progress-bar progress-bar progress-bar-animated  bg-danger" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar progress-bar-animated bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar progress-bar-animated bg-danger ms-5" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                
                <div className="progress-bar progress-bar   bg-danger me-5" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-danger start-100" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                <div className="progress-bar progress-bar   bg-danger me-5" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-danger start-100" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                <div className="progress-bar progress-bar   bg-danger me-5" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-danger start-100" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>


                <div className="progress-bar progress-bar   bg-danger me-5" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-danger start-100" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                <div className="progress-bar progress-bar   bg-danger me-5" role="progressbar" style={{width: "5%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-success" role="progressbar" style={{width: "5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar progress-bar bg-danger start-100" role="progressbar" style={{width: "5%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
           
           
            </div>
            <p className='fw-light fs-1 mt-4 mb-4'>Our Inventory</p>
            <p>While this is not a extensive list of our inventory, it does give you an idea of the parts we offer</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {partsData.map(part => {
               
                return(
                    <div NameName='col'  key={part.id}>
                        <div className="card mt-5">
                        <Image
                        src={part.date.image}
                        alt={'check'}
                        width={512}
                        height={512}
                        />    		                
                        <div className="card-body">
                        <h5 className="card-title text-decoration-underline">{part.date.Parts}</h5>
                        <p className="card-text">{part.date.Info}</p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>

        <FooterTwo />

        </>

    )
}
export default Category


export async function getStaticProps({params}) {
    const { slug  } = params

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/entry`)

    const info = data.data.entriesData.filter(categ => {
        return categ.slug === slug
    })

    const id = info[0].id
    const name = info[0].Category

    const parts = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/entry/${id}`)
    const partsData = parts.data
    return {
        props: {
            partsData, slug,name
        }
    }

}




export async function getStaticPaths() {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/entry`)

    const paths = res.data.entriesData.map((entry) => ({
        params : {
            slug : entry?.slug,
        }
    }))

    return {
        paths, 
        fallback : false
    }

    
}