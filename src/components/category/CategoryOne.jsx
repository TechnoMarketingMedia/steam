import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils";
import image1 from "/public/images/logocover.jpg"


const CategoryOne = ({cateData, cate}) => {
    const categories = cateData.map(data => {
        const obj = {
            name: data.cate,
            thumb: data.cate_img
        }
        return obj;
    });
    
    const category = categories.reduce((prev, curr) => {
        prev[curr.name] = (prev[curr.name] || 0) + 1
        return prev;
    }, {})
    
    var cateList = Object.keys(category).map(cateTitle => {
        const imgGet =  categories.filter(post => post.name === cateTitle);
        
        return {
            name: cateTitle, 
            slug: slugify(cateTitle),
            count: category[cateTitle],
            cateImg: imgGet[0].thumb
        }; 
    });

  return (
    <div className="axil-banner-cat-counter">
      <div className="container">
        <div className="axil-content">
          <ul className="category-list-wrapper d-flex justify-content-around">
                { cate.entriesData.slice(0, 5).map((data) => (
					<li className="category-list perfect-square" key={data.slug}>
						<Link href={`${data.slug}`}>
						<a className="list-inner rounded-3">
							<Image
							src={data['image-url']}
							alt={data.Category}
							width={160}
							height={160}
							/> 
					
						</a>
						</Link>
            <div className="text-center">
              <button type="button" className="btn btn-danger btn-custom-sm mt-2">
                <a href={`${data.slug}`}> {data.Category}</a></button>
            </div>
					</li>
                ))}
          </ul>
          {/* End of .category-list-wrapper */}
        </div>
        {/* End of .axil-content */}
      </div>
      {/* End of .container */}
    </div>
  );
};

export default CategoryOne;
