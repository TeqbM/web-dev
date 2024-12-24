import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {

  useEffect(()=>{

    // GSAP timeline for image, title, and description animations
    gsap.fromTo(".image-section img", { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1 })
        .duration(1.5)
        .delay(0.5);

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".image-section",
            start: "top top",
            end: "410%",
            scrub: true,
            pin: true,
            markers: false, // remove this line in production
        },
    });

    // Image opacity animation on page load
    gsap.fromTo(".image-section img", { opacity: 0 }, { opacity: 1, duration: 3 });

    // Add title text animation to the timeline
    tl.to(".title-text", {
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            start: "+=100",
            end: "+=400",
            scrub: true,
            markers: false, // remove this line in production
        },
    }).to(".title-text", {
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            start: "+=800",
            end: "+=1200",
            scrub: true,
            markers: false, // remove this line in production
        },
    });

    // Add description text animation to the timeline
    tl.to(".description-text", {
        opacity: 1,
        backgroundImage: "linear-gradient(to bottom, #fff 100%, rgb(0, 0, 0) 0%)",
        color: "black",
        duration: 1,
        ease: "none",
        scrollTrigger: {
            start: "+=1600",
            end: "+=2200",
            scrub: true,
            markers: false, // remove this line in production
        },
    });

  },[]);

  return (
    <>

<div className="image-section">
    <img src="https://images.pexels.com/photos/2449605/pexels-photo-2449605.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=""  alt='images'/>
    <h1 className="title-text">
        The Future Just Got Brighter.
    </h1>
    <div className="description-text">
        Introducing the Dex FINGERLIGHT, a beacon of innovation in the world of portable
        illumination. This sleek, compact marvel isn't just a flashlight—it's a
        versatile tool designed to meet every lighting need with ease and elegance. Its
        ergonomic design offers unparalleled comfort and control, while the durable,
        construction ensures dependable performance in any environment.
    </div>
</div>
    </>
  )
}
