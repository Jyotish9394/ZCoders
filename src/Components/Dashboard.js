import React, { useState } from 'react';
import { Button, Popover, Typography, TextField, Box } from '@mui/material';

export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <section className="dashboard">
                <div className="dash">Your Dashboard</div>
                <section className="dashboard_design">
                    <section className="dash_section_01">
                        <div className="dash_first">
                            <div>Username: </div>
                            <div>CP Rating: </div>
                            <div>Fav Programming Language:</div>
                            <div>You're Ranked #xyz in ZCoder website</div>
                        </div>
                        <div className="dash_second">
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                Update Profile
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Box p={2} sx={{ minWidth: 250 , backgroundColor:'rgba(168, 169, 168,0.9)' }}>
                                    <Typography variant="h6">Update Profile</Typography>
                                    <TextField
                                        label="Username"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        sx={{backgroundColor:'rgba(250, 252, 251,1)'}}
                                    />
                                    <TextField
                                        label="CP Rating"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        sx={{backgroundColor:'rgba(250, 252, 251,1)'}}
                                    />
                                    <TextField
                                        label="Fav Programming Language"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        sx={{backgroundColor:'rgba(250, 252, 251,1)'}}
                                    />
                                    <Button variant="contained" color="primary" fullWidth>
                                        Save
                                    </Button>
                                </Box>
                            </Popover>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}
