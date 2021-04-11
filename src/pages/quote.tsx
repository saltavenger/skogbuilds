import React from "react"
import { Container,
  Typography,
  Link,
  Card,
  TextField,
  Box,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
  FormLabel,
  Snackbar
} from '@material-ui/core'
import { Phone, Email } from '@material-ui/icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {withFirebase} from '../components/firebaseContext'

interface IProps {
  firebase: any;
}

interface IState {
  contactType: string;
  name: string;
  phone: string;
  email: string;
  description: string;
  submitted: boolean;
  openSuccess: boolean;
  openFailure: boolean;
}

const initialState = {
  contactType: 'email',
  name: '',
  phone: '',
  email: '',
  description: '',
  submitted: false,
  openSuccess: false,
  openFailure: false
}

class Quote extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onContactTypeChange = this.onContactTypeChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.state = initialState;
  }

  resetState() {
    this.setState(initialState)
  }
  
  onFormSubmit(ev) {
    ev.preventDefault();
    this.setState({submitted: true});
    if (this.state.email !== ''
      && this.state.name !== ''
      && this.state.description !== ''
      && (this.state.contactType !== 'phone' || this.state.phone !== '')) {
      const req = this.props.firebase.functions().httpsCallable('sendQuote');
      req(this.state)
        .then(() => {
          this.resetState();
          this.setState({openSuccess: true});
        })
        .catch((err) => {
          console.log(err);
          this.setState({openFailure: true});
        });
    }
  }

  onNameChange(ev) {
    this.setState({name: ev.target.value});
  }

  onEmailChange(ev) {
    this.setState({email: ev.target.value});
  }

  onPhoneChange(ev) {
    this.setState({phone: ev.target.value});
  }

  onDescriptionChange(ev) {
    this.setState({description: ev.target.value});
  }

  onContactTypeChange(ev) {
    this.setState({contactType: ev.target.value});
  }

  closeSnackbar() {
    this.setState({openSuccess: false, openFailure: false});
  }

  render() {
    return (
      <Layout tab={2}>
      <SEO title="Get a quote" />
      <Container>
        <Snackbar open={this.state.openSuccess} autoHideDuration={6000} onClose={this.closeSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Box bgcolor="success.main" p={1} borderRadius={4}><Typography variant="body1" color="textSecondary">Success! Quote submitted</Typography></Box>
        </Snackbar>
        <Snackbar open={this.state.openFailure} autoHideDuration={6000} onClose={this.closeSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Box bgcolor="error.main" p={1} borderRadius={4}><Typography variant="body1" color="textSecondary">Error, please try again later</Typography></Box>
        </Snackbar>
        <Typography variant="h2">Get a Quote</Typography>
        <Box mt={2}>
          <Typography variant="body1">Please describe the project to the best of your ability below or call <Link href="tel:1-‭516-412-2640‬">‭(516) 412-2640‬</Link>. We will respond within 24-48 hours.</Typography>
        </Box>
        <Box mt={2} mb={4}>
          <Card elevation={3}>
            <form>
              <Box p={2}>
                <TextField id="name"
                  label="Name"
                  color="secondary"
                  required
                  error={this.state.name === '' && this.state.submitted}
                  value={this.state.name}
                  onChange={this.onNameChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"></TextField>
                </Box>
              <Box p={2}>
                <TextField id="email"
                  label="Email"
                  required
                  error={this.state.email === '' && this.state.submitted}
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  color="secondary"
                  variant="outlined"
                  InputProps={{
                    type: "email",
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}>
                </TextField>
              </Box>
              <Box p={2}>
                <TextField id="phone"
                  color="secondary"
                  label="Phone number"
                  required={this.state.contactType === 'phone'}
                  error={this.state.contactType === 'phone' && this.state.phone === '' && this.state.submitted}
                  variant="outlined"
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                  InputProps={{
                    type: "tel",
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}>
                </TextField>
              </Box>
              <Box p={2}>
                <TextField id="description"
                  label="Describe your project"
                  fullWidth={true}
                  required
                  error={this.state.description === '' && this.state.submitted}
                  color="secondary"
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
                  rows={5}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                  multiline={true}>
                </TextField>
              </Box>
              <Box p={2}>
                <FormControl component="fieldset">
                  <FormLabel color="secondary" component="legend">Do you prefer we contact you via email or phone?</FormLabel>
                  <RadioGroup aria-label="Contact preference" name="contactType" value={this.state.contactType} onChange={this.onContactTypeChange}>
                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box p={2}>
                <Button color="primary" variant="contained" type="submit" onClick={this.onFormSubmit}>Submit quote</Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Container>
    </Layout>
    );
  }
}

export default withFirebase(Quote)
