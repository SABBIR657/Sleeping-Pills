/* eslint-disable react/prop-types */

const CommonWrapper = ({children}) => {
  return (
    <div className="max-w-[1024px] py-4 mx-auto my-auto">
      {children}
    </div>
  )
}

export default CommonWrapper
