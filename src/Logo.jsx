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
          marginLeft: "105px",
          color: "gray",
          fontStyle: "italic",
        }}
      >
        IZIBEST LIFESTYLE
      </div>
    </div>
  );
}

export default Logo;
