import React,{Component} from 'react'


const FormCreate = WrapperdComponent => {
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
                fileds:{}
            }
        }

        onChange = (key) => e => {
            this.setState({
                fields:{
                    ...this.state.fileds,
                    [key]:e.target.value
                }
            })
        }

        handleSubmit = () => {
            console.log('this state is',this.state);
        }

        getFields = (filename) => {
            return {
                onChange:this.onChange(filename)
            }
        }

        render(){
            const props = {
                ...this.props,
                getFileds:this.getFields,
                handleSubmit:this.handleSubmit
            }
            return <WrapperdComponent {...props} />
        }
    }
}

export default FormCreate;