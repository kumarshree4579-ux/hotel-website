import React from 'react'
import "./CSS/LocalActivities.css"

const LocalActivities = () => {

    const localactivities = [
        {
            id: 1,
            Title: 'Typical Food',
            Desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            Image: 'public/Images/local_amenities_1.jpg'
        },
        {
            id: 2,
            Title: 'Horse Ride',
            Desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            Image: 'public/Images/local_amenities_3.jpg'
        },

    ]
    return (
        <section className="local-activities">
            {localactivities.map((item) =>
                <div className="activities-card" key={item.id}>
                    <div className="local-img" >
                        <img src={item.Image} alt={item.Title} />
                    </div>
                    <div className="local-text">
                        <small>
                            Local Activities
                        </small>
                        <h2>
                            {item.Title}
                        </h2>
                        <p>
                            {item.Desc}
                        </p>
                    </div>
                </div>
            )}
                  <hr className='about_hr' />
<br/>
        </section>
    )
}

export default LocalActivities
