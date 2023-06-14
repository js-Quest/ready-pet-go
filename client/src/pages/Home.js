import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <div class="col-9 container-fluid mt-5 border border-5 rounded">
                <h1>Welcome fellow pet Enthusiasts! </h1>
                <p>
                    At Ready-Pet-Go!, our mission is to be the trusted companion for pet owners, providing comprehensive guidance and support to both new and experienced pet enthusiasts. We are dedicated to fostering a harmonious relationship between pets and their human companions by offering a wealth of reliable information, resources, and a vibrant community.
                </p>


                <h3>Guiding New Pet Owners:</h3>
                <p>
                    We understand that welcoming a new pet into your life is an exciting and sometimes overwhelming experience. Our goal is to empower new pet owners with the knowledge they need to confidently navigate every aspect of pet care. Through our user-friendly platform, we provide expert advice on choosing the right pet, training techniques, nutrition, grooming, and healthcare. We strive to be the go-to source that new pet owners can rely on, ensuring they have all the tools to create a loving and enriching environment for their furry friends.
                </p>

                <h3>Supporting Experienced Pet Owners:</h3>
                <p> Even the most experienced pet owners face challenges along their journey. We believe in continuously nurturing the bond between pets and their devoted owners. Our platform serves as a trusted companion for seasoned pet enthusiasts, offering advanced insights, innovative training methods, and the latest trends in pet care. We go beyond the basics, providing a hub where experienced pet owners can find solutions to complex issues, share their experiences, and connect with like-minded individuals who truly understand the joys and trials of pet ownership.</p>

                <h3>Building a Community:</h3>
                <p>
                    At the heart of Ready-Pet-Go!, we cultivate a vibrant community of passionate pet lovers. We foster connections and provide a safe space where pet owners can come together to share their stories, seek advice, and celebrate the unconditional love that pets bring to our lives. Our community-driven platform encourages engagement, knowledge sharing, and a sense of belonging. We believe that by connecting pet owners across the globe, we can collectively enhance the well-being of our beloved animal companions.</p>

                <h3>Empathy, Expertise, and Excellence:</h3>
                <p>In everything we do, we prioritize empathy, expertise, and excellence. We understand the deep emotional connection between pets and their owners, and we approach every interaction and piece of content with compassion and understanding. Our team of dedicated experts ensures the accuracy and relevance of the information we provide, staying at the forefront of advancements in pet care. We strive for excellence in all aspects of our platform, delivering an exceptional user experience and valuable resources that inspire pet owners to continually grow and learn.

                    With Ready-Pet-Go!, you and your pet are never alone on this incredible journey. Together, let's build a stronger bond, provide the best care, and create a world where pets thrive and owners flourish.
                </p>
            </div>
            <br />
            <br />
            <div >
                <h1>HealthCare</h1> 
                <h3>This is a place holder!</h3>
                <p>
                <Link
                  className="text-light"
                  to={`/healthcare`}
                > <br />
                  <span style={{ fontSize: '1rem' }}>
                    testing to see if this works
                  </span>
                </Link>
                </p>
            </div>
            <br />
            <br />

            <div>
                <h1>Recommend Starting Accessories</h1> 
                <h3>This is a place holder!</h3>
                <p>
                <Link
                  className="text-light"
                  to={`/productOnHome`}
                > <br />
                  <span style={{ fontSize: '1rem' }}>
                    also testing this! 
                  </span>
                </Link>
                </p>
            </div>

        </>

    )
}
