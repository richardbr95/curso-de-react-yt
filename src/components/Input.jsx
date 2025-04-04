function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // Envia todas as props recebidas para o input
    />
  );
}
export default Input;
