import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography, } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
    marginTop: "10px"

});

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>

                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmfQgdsbH1qYF6-dScZoNXWfgH7B02WmlOw&usqp=CAU"
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span">Onifade Joshua</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's happening?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} marginTop={2} marginBottom={2}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;