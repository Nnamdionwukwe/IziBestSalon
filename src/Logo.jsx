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
          marginLeft: "90px",
          color: "gray",
          fontStyle: "italic",
          fontFamily: "san-sariff",
        }}
      >
        IZIBEST LIFESTYLE
      </div>
    </div>
  );
}

export default Logo;
