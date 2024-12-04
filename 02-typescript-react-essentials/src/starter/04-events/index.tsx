import { useState } from "react";
import { string } from "zod";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget)
    const formDatas = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formDatas);
    // const text = formDatas.get("text");
    console.log(data);
  };

  return (
    <section>
      <h2>events example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="form-input mb-1"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          className="form-input mb-1"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
