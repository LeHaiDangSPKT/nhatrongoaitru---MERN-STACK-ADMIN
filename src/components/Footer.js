function Footer() {
  const style = {
    left: {
      flex: "60%",
    },
    right: {
      flex: "40%",
    },
  };
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="grid wide">
        <div className="footer_up">
          <div className="footer_up-item" style={style.left}>
            <div className="footer__up-item--head">
              Đơn vị LCH Sinh viên Ngoại trú
            </div>
            <p>
              "Liên chi Hội Sinh viên Ngoại trú luôn đồng hành cùng sinh viên"
            </p>
          </div>
          <div className="footer_up-item" style={style.right}>
            <div className="footer__up-item--head">Thông tin liên hệ</div>
            <ul>
              <li>
                <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCHrglXcHfpwQcKvlPPNXNwmhgzQgDHTrPkNllPCzsbjCKsClQwRGclqjPWwNhNsbMKGjKbq">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/LCHSVNgoaiTruSPKT">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://vt.tiktok.com/ZSebo66Ur/">Tiktok</a>
              </li>
              <li>
                <a href="#">SĐT: 0337773955</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="footer_down">
          <p className="copyright-text">
            Copyright &copy; {year.toString()} All Rights Reserved by LeHaiDang
            - LCH Sinh Viên Ngoại Trú
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
