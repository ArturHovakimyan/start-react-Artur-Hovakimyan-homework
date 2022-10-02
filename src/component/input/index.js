import React from "react";


class TextInput extends React.Component {

  render() {
    const { props:{ placeholder,name, handleInputChange } } = this;
        return (
            <div>
                <input type={'number'} name={name} placeholder={placeholder}
                onChange={ handleInputChange }
                />
            </div>
        )
  }
}

export default TextInput;