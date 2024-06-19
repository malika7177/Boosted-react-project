import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/2c5a/4848/f70d522b71ba83853f9a1bb53522ac47?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipy-sCUA5gozVn~UPE7ngL3AhTXKj1QueC6D0TD5jz5bsWYYN~SfJe4Ttx7nZT31l3TegPnNuSHRAmOQVEhMYuwNn69omY3xxxMfKeD~Q3b-0A1l-X6UVvDEWQe31UNK9icukZPzrHDk0koiaZXJrq2U9beZ0Y44~69PnnD7xfmHnzKZpmWLuZ9aIbqT7r3AeuiZ7iVs2-LYhVrCP7mkUMRjjLE50r6ABBww5NJtVANS4JfvhPZvOlrpz1fAr14XAi7gGVJsW7RGajUv1QH3TefH7kzfOVxG41lI46nJIkKhC6wNXFt-lRIRK3EyCzxaykvLEbWe9X7jJ0qiikijVg__" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Electric Skateboards</a>
          </li>
          <li>
            <a href="#">Electric Skooters</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Gift Card</a>
          </li>
          <li>
            <a href="#">More Info</a>
          </li>
        </ul>
      </nav>
      <div className="icon">
        <a href="user">
          <i class="bi bi-person-circle"></i>
        </a>
        <a href="buy">
          <i class="bi bi-cart"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
