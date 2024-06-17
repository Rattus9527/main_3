import bg from "/EP3/BoatScene/bg.png";

function Book() {
  return (
    <div className="book">
      <div className="left">
        <img src={bg} alt="" />
        <div className="book-text">
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      </div>
      <div className="right">
        <img src={bg} alt="" />
        <div className="book-text">
          <p>123</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
