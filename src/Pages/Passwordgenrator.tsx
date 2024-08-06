import React, { useCallback, useState, useEffect } from "react";

const Passwordgenrator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<number>(0);
  const [chractor, setChractor] = useState(false);
  const [number, setNumber] = useState(false);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (chractor) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      let passGenrater = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(passGenrater);
    }
    setPassword(pass);
  }, [number, chractor, length, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [number, chractor, length, setPassword]);

  return (
    <div>
      <div className="flex flex-row justify-center items-center bg-slate-300 w-svw h-svh">
        <div className="pass_container w-2/4 rounded-2xl p-10  h-auto bg-blueBg">
          <div className="w-full h-10 flex relative">
            <input
              type="text"
              value={password}
              readOnly
              className="text w-full h-full rounded-2xl"
            />
            <button className="buttonStyle h-full absolute right-0">
              Copy
            </button>
          </div>
          <div className="flex flex-row mt-5 w-full justify-between">
            <div className="button__container flex flex-row">
              <input
                type="range"
                name=""
                id=""
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="range__button mr-2"
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Length {length}
              </label>
            </div>
            <div className="number__container flex flex-row">
              <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => setNumber(!number)}
                name=""
                className="mr-3"
                id=""
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Number
              </label>
            </div>
            <div className="number__container flex flex-row">
              <input
                type="checkbox"
                name=""
                defaultChecked={chractor}
                onChange={() => setChractor(!chractor)}
                className="mr-3"
                id=""
              />
              <label htmlFor="#" className="textStyle">
                {" "}
                : Chrector
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenrator;
