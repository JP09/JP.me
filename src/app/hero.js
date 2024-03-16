import { faCss3, faGithub, faHtml5, faInstagram, faJsSquare, faLinkedin, faUbuntu, faNodeJs, faPython, faReact, faXTwitter, faEthereum, faDrupal, faAppStore, faGooglePlay, faAmazon, faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="card hero-content items-center flex mx-80 bg-base-100 shadow-xl" id="hero">
      <Image src='/JP.jpg' className="avatar rounded-full" width={300} height={300} alt="Jay P" />
      <div className="hero-overlay">
        <h2 className="sm:text-xl font-semibold text-center tracking-tighter">"Unlocking Digital Excellence:</h2><h1 className="sm:text-4xl font-bold text-center tracking-tighter">Welcome to Jay's World</h1>
        <p>
        Hey there, I'm Jay! 👋 A passionate software developer hailing from the vibrant city of Miami, Florida. 
        My expertise lies in crafting captivating websites, innovative applications, and comprehensive digital solutions tailored to 
        elevate businesses across diverse industries. From concept to execution, I thrive on delivering exceptional results that resonate with users and drive growth.
          <pre className="font-sans">9am-5pm : Full Stack developer👨🏻‍💻</pre>
          <pre className="font-sans">5pm-9pm : Handyman Footballer⚽</pre>
        </p>
        <br />
        <h2 className="sm:text-xl font-semibold tracking-tighter">Join me on a journey where technology meets creativity. Together, let's build something extraordinary."</h2>
        <div className="flex place-content-end space-x-5">
          <Link
            href="https://twitter.com/nemesis_jay"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="size-10"/>
          </Link>
          <Link
            href="https://github.com/JP09"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="size-10"/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jay-patel-5374a416b/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-10"/>
          </Link>
          <Link
            href="https://www.instagram.com/jaylo_lambo"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="size-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}


export const About = () => {
  return (
    <section className="card lg:card-side bg-base-100 shadow-xl mx-60">
      <Image src='/about.jpg' width={700} height={500} className="p-5"/>
      <div className="flex card-body items-center">
        <h2 className="sm:text-6xl font-semibold tracking-tighter card-title" id="about">About Me</h2>
        <div className="card-body">
          <p>
          Welcome to my digital playground! I'm Jay, a versatile software developer based in the sunny haven of Miami, Florida.
          With a knack for turning ideas into reality, I specialize in crafting seamless digital experiences that leave a lasting impression.
          </p>
          <p>From dawn till dusk, I wear multiple hats. As a full-stack developer, my days are spent meticulously coding and designing, weaving together intricate webs of innovation. 
            But when the sun sets, I transition into a different arena - that of a handyman footballer. Yes, you read that right! Football isn't just a sport for me; 
            it's a passion that fuels my evenings with energy and camaraderie.
          </p>
          <p>
          Driven by a relentless pursuit of excellence, I don't just build websites and applications; I architect solutions. 
          My mission? To empower businesses of all sizes, across all sectors, to thrive in the digital landscape. 
          Whether you're a startup with big dreams or an established enterprise seeking to redefine your online presence, I've got you covered.
          </p>
          <p>
          So, whether you're here to explore my portfolio, collaborate on a project, or simply share your love for football, I'm thrilled to connect.
          Let's embark on this journey together, where innovation knows no bounds and possibilities are limitless.
          </p>
        </div>
      </div>
    </section>
    
  );
}




export const Skills = () => {
  return (
    <div className="card items-center hero-overlay hero-content flex mx-80 bg-base-100">
      <h2 className="sm:text-4xl font-semibold racking-tighter text-center">Skills</h2>
      <div className="block items-center px-10">
        <section className="flex items-center"> 
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faHtml5} className="size-10 mx-5"/>
            <p>HTML</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faCss3} className="size-10 mx-5"/>
            <p>CSS</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faJsSquare} className="size-10 mx-5"/>
            <p>JavaScript</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faReact} className="size-10 mx-5"/>
            <p>React</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faNodeJs} className="size-10 mx-5"/> 
            <p>Node</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faPython} className="size-10 mx-5"/>
            <p>Python</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faDrupal} className="size-10 mx-5"/>
            <p>PHP</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faUbuntu} className="size-10 mx-5"/>
            <p>Linux</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faEthereum} className="size-10 mx-5"/>
            <p>Web3</p>
          </div>
        </section>
        <section className="flex items-center place-content-center">
        <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faAppStore} className="size-10 mx-5"/>
            <p>iOS</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faGooglePlay} className="size-10 mx-5"/>
            <p>Android</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faAmazon} className="size-10 mx-5"/>
            <p>E-Comm</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faBitcoin} className="size-10 mx-5"/>
            <p>BlockChain</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faMicrochip} className="size-10 mx-5"/>
            <p>AI</p>
          </div>
          <div className="btn btn-ghost block btn-lg items-center">
            <FontAwesomeIcon icon={faCodeBranch} className="size-10 mx-5"/>
            <p>Git</p>
          </div>
        </section>
      </div>
    </div>
  );
}