import React, {
  Component,
  PropTypes,
} from 'react';
import styled from 'styled-components'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import LoadingOverlay from '@globalComponents/LoadingOverlay'
import Button from '@globalComponents/DefaultButton'
import fonts from '@fonts'
import colors from '@colors'
import styles from '@consts/styles'

const Title = styled.div`
  text-align: center;
  width: 100%;
  height: 40px;
  font-size: ${fonts.large}
`
const SignUp = styled.div`
  display: inline-block;
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${colors.primaryColor};
  cursor: pointer;
  text-align: right;
  font-size: ${fonts.medium};
`

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonName: 'Entrar',
    }
  }

  static propTypes = {
    authLoading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
  };

  render() {
    const {
      authLoading,
      login,
      handleSubmit,
      goToSignUp,
    } = this.props
    const {
      buttonName,
    } = this.state

    return (
      <div>
        { authLoading && <LoadingOverlay /> }
        <Title>Login</Title>
        <form onSubmit={handleSubmit(login)}>
          <Field
            name="username"
            style={styles.inputField}
            component={TextField}
            floatingLabelText="Nome de Usuário"
          />
          <Field
            name="password"
            type="password"
            style={styles.inputField}
            component={TextField}
            floatingLabelText="Senha"
          />
          <SignUp onClick={() => goToSignUp()}>
            Não tenho cadastro
          </SignUp>
          <Button label={buttonName} />
        </form>
      </div>
    )
  }
}

export default (LoginPage)
