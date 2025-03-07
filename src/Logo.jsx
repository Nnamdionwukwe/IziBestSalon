function Logo() {
  const image = "salon-logo.jpg";
  const styles = {
    width: "330px",
    borderRadius: "100%",
  };

  const style = {
    marginTop: "-40px",
    marginLeft: "95px",
    color: "gray",
    fontStyle: "italic",
    fontFamily: "san-sariff",
  };

  return (
    <div>
      <div>
        <img style={styles} src={image} />
      </div>

      <div style={style}>IZIBEST LIFESTYLE</div>
    </div>
  );
}

export default Logo;
