document.getElementById("nav").innerHTML = `
  <nav class="nav">
    <h1>
      <a href="/">
        <img class="logo" src="./assets/icon-glasses.svg" alt="glasses logo" />
      </a>
    </h1>

    <ul class="flex">
      <li class="link-item">
        <a href="#">系列鏡框</a>
      </li>
      <li class="link-item">
        <a href="#">門市據點</a>
      </li>
      <li class="link-item">
        <a href="#">部落格</a>
      </li>
      <li class="link-item">
        <a href="#">常見問題</a>
      </li>
    </ul>
  </nav>
`;

document.getElementById("footer").innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="flex justify-between items-center mb-18">
        <ul class="flex">
          <li class="footer-item">
            <a href="#">系列鏡框</a>
          </li>
          <li class="footer-item">
            <a href="#">門市據點</a>
          </li>
          <li class="footer-item">
            <a href="#">部落格</a>
          </li>
          <li class="footer-item">
            <a href="#">常見問題</a>
          </li>
        </ul>
        <ul class="flex">
          <li class="icon-item">
            <a href="#">
              <img src="./assets/icon-fb.svg" alt="fb-icon" />
            </a>
          </li>
          <li class="icon-item">
            <a href="#">
              <img src="./assets/icon-ig.svg" alt="ig-icon" />
            </a>
          </li>
          <li class="icon-item">
            <a href="#">
              <img src="./assets/icon-line.svg" alt="line-icon" />
            </a>
          </li>
        </ul>
      </div>
      <ul class="contact-list">
        <li class="contact-item">
          <a href="tel:0800000000"
            ><img class="icon" src="./assets/icon-phone.svg" alt="phone" />
            0800-000-000</a
          >
        </li>
        <li class="contact-item">
          <a href="mail:glasses@business.com"
            ><img
              class="icon"
              src="./assets/icon-mail.svg"
              alt="phone"
            />glasses@business.com</a
          >
        </li>
      </ul>
      <div class="flex justify-between items-center">
        <div class="copyright flex items-center">
          <img class="logo" src="./assets/logo.png" alt="glasses-icon">
          <p>Copyright © 2020 Glasses.All rights reserved.</p>
        </div>
        <ul class="flex">
          <li class="copyright-item"><a href="#">隱私權政策</a></li>
          <li class="copyright-item"><a href="#"></a>服務條款</li>
        </ul>
      </div>
    </div>
  </footer>
`;
