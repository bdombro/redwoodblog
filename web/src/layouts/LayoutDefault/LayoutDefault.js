import HeaderDefault from "src/components/HeaderDefault";

const LayoutDefault = ({children}) => {

  return (
    <div className="rw-scaffold">
      <HeaderDefault />
      <main>{children}</main>
    </div>
  )
}

export default LayoutDefault
