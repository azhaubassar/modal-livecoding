function ErrorModal({ errorMessage = "Ошибка на BE" }) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "red",
        width: 200,
        height: 50,
        top: 50,
        right: "50%",
      }}
    >
      <p>{errorMessage}</p>
    </div>
  );
}

export default ErrorModal;
