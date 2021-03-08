import React from "react"
import { PageProps } from "gatsby"
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
  FormLabel
} from '@material-ui/core'
import { Phone, Email } from '@material-ui/icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Quote: React.FC<PageProps> = () => {
  const [contactType, setContactType] = React.useState<string|undefined>('email');
  const [name, setName] = React.useState<string|undefined>(undefined);
  const [phone, setPhone] = React.useState<string|undefined>(undefined);
  const [email, setEmail] = React.useState<string|undefined>(undefined);
  const [description, setDescription] = React.useState<string|undefined>(undefined);
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  
  function onFormSubmit() {
    setSubmitted(true);
  }

  return (
    <Layout tab={2}>
    <SEO title="Get a quote" />
    <Container>
      <Box mt={2} mb={2}><Typography variant="h2">Get a Quote</Typography></Box>
      <Box mt={2}>
        <Typography variant="body1">Use the form below or call <Link href="tel:1-‭516-412-2640‬">‭(516) 412-2640‬</Link></Typography>
      </Box>
      <Box mt={2} mb={4}>
        <Card>
          <form>
            <Box p={2}>
              <TextField id="name"
                label="Name"
                color="secondary"
                required
                error={name === undefined && submitted}
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"></TextField>
              </Box>
            <Box p={2}>
              <TextField id="email"
                label="Email"
                required
                error={email === undefined && submitted}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
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
                required={contactType === 'phone'}
                error={contactType === 'phone' && phone === undefined && submitted}
                variant="outlined"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
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
                error={description === undefined && submitted}
                color="secondary"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
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
                <RadioGroup aria-label="Contact preference" name="contactType" value={contactType} onChange={(ev) => setContactType(ev.target.value)}>
                  <FormControlLabel value="email" control={<Radio />} label="Email" />
                  <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box p={2}>
              <Button color="primary" variant="contained" type="submit" onClick={onFormSubmit}>Submit quote</Button>
            </Box>
          </form>
        </Card>
      </Box>
    </Container>
  </Layout>
  );
}

export default Quote
