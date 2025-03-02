function Logo() {
  const image = "salon-logo.jpg";
  const styles = {
    width: "330px",
    borderRadius: "100%",
  };

  return (
    <div>
      <div>
        <img style={styles} src={image} />
      </div>

      <div
        style={{
          marginTop: "-40px",
          marginLeft: "85px",
          color: "blue",
          fontStyle: "bold",
          fontFamily: "cursive",
        }}
      >
        IZIBEST LIFESTYLE
      </div>
    </div>
  );
}

export default Logo;
