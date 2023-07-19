export default function Header() {
  return (
    <header className="head">
     <div className="name">
      <h1>Vuyiswa Diale</h1>
    </div>
      
      <h4 className="career">Software Engineering Student</h4>
   

      <div className="profile">
        <picture>
          <source media="(max-width: 500px)" srcSet="../images/VuyiswaM.png" alt="VuyiswaM" />
          <source media="(max-width: 1000px)" srcSet="../images/VuyiswaS.png" alt="VuyiswaS" />
          <img src="../images/Vuyiswa.png" alt="Vuyiswa" />
        </picture>
      </div>

      <div className="intro">
        <p>An aspiring Software Developer seeking to have an opportunity to showcase her skills and abilities in a fun and challenging working environment. This will encourage her to improve and become the best candidate for the job and to learn new and necessary skills and to be mentored by the company to do her best as this will help her and the company to advance in the software engineering industry.</p>
      </div>

      <div className="address">
        <p><i className="fa-solid fa-phone"></i> 0691869937</p>
        <p><i className="fa-solid fa-house"></i> 554 Ngeneng Section, Lefaragatlha, Rustenburg, 0309</p>
        <p><i className="fa-regular fa-envelope"></i> dialevuyiswa@gmail.com</p>
      </div>

        <div className="icons">
          <a href="https://www.linkedin.com/in/vuyiswa-diale-a62aaa267/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
          </a>
        </div>

    </header>
  );
}
