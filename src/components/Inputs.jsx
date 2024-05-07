import { forwardRef } from "react"


const Inputs = forwardRef(function Inputs({ name, type, Input = "input" }, ref) {

  return (
    <>
      <label>{name}</label>
      <Input ref={ref} type={type} />
    </>
  )
});

export default Inputs;
