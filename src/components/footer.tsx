import {Box, Link, Container, Divider, Typography} from '@material-ui/core'
import { Phone, Email } from '@material-ui/icons'
import clsx from 'clsx';
import { any, bool, string } from 'prop-types';
import React from "react"

const Footer = ({isOpen, classData, siteTitle}) => {
    const classes = classData;
    return (
        <Box component="footer" mt={0} bgcolor="primary.main" className={clsx(classes.content, {[classes.contentShift]: isOpen})}>
            <Container>
                <Box p={2}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Box>
                            <Box><Link color="textSecondary" href="tel:1-‭516-412-2640‬"><Phone style={{verticalAlign: 'middle'}} /> ‭(516) 412-2640‬</Link></Box>
                            <Box><Link color="textSecondary" href="mailto:info@skogbuilds.com"><Email style={{verticalAlign: 'middle'}} /> info@skogbuilds.com</Link></Box>
                        </Box>
                    </Box>
                    <Divider />
                    <Box mt={2}>
                        <Typography variant="body2" color="textSecondary">© {siteTitle} {new Date().getFullYear()}</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

Footer.propTypes = {
    isOpen: bool,
    classData: any,
    siteTitle: string
}

Footer.defaultProps = {
    isOpen: false
}

export default Footer;
