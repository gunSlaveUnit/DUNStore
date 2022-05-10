import React, {useEffect} from "react";
import * as API from "../apis/API";
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    styled,
    TextField,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useCookies} from "react-cookie";

const disabledEditingFields = ["id", "created_at", "updated_at"];

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#ae718f',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ae718f',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ae718f',
        },
        '&:hover fieldset': {
            borderColor: '#ae718f',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ae718f',
        },
    },
});

export default function Update({what, slug}) {
    const [product, setProduct] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        API.detail(what, slug)
            .then(p => setProduct(p))
    }, [slug, what])

    const [data, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});


    const handleChange = ({currentTarget: input}) => {
        let newData = {...data};
        newData[input.id] = input.value;
        setData(newData);
    };

    const handleImageChange = ({currentTarget: input}) => {
        let newData = {...data};
        newData[input.id] = input.files[0];
        setData(newData);
    };

    function handleSubmit() {
        let form_data = new FormData();

        Object.entries(data)
            .forEach(([key, value]) => {
                if (key === "image")
                    form_data.append("image", data.image, data.image.name);
                else
                    form_data.append(key, value);
            });

        form_data.append("is_published", "true")

        API.update(what, slug, form_data, cookies["access"])
            .then(r => setIsOpen(false))
    }

    return (
        <React.Fragment>
            <Button variant={"contained"} startIcon={<EditIcon/>} onClick={() => setIsOpen(true)}
                    style={{
                        borderRadius: 10,
                        background: "#7a9cbc",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderColor: "#435567",
                    }} size={"small"}>
                <Typography variant={"small"} textTransform={"capitalize"}>
                    Update
                </Typography>
            </Button>

            {isOpen &&
                <Dialog open={isOpen} onClose={() => setIsOpen} aria-labelledby={"form-dialog-title"}
                        PaperProps={{
                            style: {
                                backgroundColor: '#1e1e21',
                                boxShadow: 'none',
                                borderRadius: "1.8em"
                            },
                        }}>
                    <DialogTitle id={"form-dialog-title"}>
                        <Typography variant={"h4"} style={{color: "#eceded"}}>
                            Update
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        {Object.entries(product).map(([k, v]) =>
                            <CssTextField key={k} id={k} type={"text"} defaultValue={v} disabled={disabledEditingFields.includes(k)}
                                          onChange={(e) => {
                                              if (k === "image")
                                                  handleImageChange(e);
                                              else
                                                  handleChange(e);
                                          }}
                            label={k.charAt(0).toUpperCase() + k.slice(1).replace(/_/g, " ")}
                                          fullWidth required sx={{label: {color: '#ededed'}, input: {color: '#ededed'}}} margin={"dense"}/>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit} variant={"contained"}
                                style={{
                                    marginRight: 15,
                                    borderRadius: 10,
                                    background: "#ae718f",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#664350"
                                }} size="medium">
                            <Typography variant={"h6"} style={{color: "#eceded"}} textTransform={"capitalize"}>
                                Submit
                            </Typography>
                        </Button>
                        <Button onClick={() => setIsOpen(false)} variant={"contained"}
                                style={{
                                    borderRadius: 10,
                                    background: "#7a9cbc",
                                    borderStyle: "solid",
                                    borderWidth: 3,
                                    borderColor: "#435567"
                                }} size={"medium"}>
                            <Typography variant={"h6"} textTransform={"capitalize"}>
                                Close
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </React.Fragment>
    );
}