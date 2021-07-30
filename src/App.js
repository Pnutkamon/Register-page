import './App.css';
import 'date-fns';
import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm } from 'react-hook-form';
import { FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { useTable, useGlobalFilter } from 'react-table';
import { FixedSizeList } from 'react-window';
import ReactDOM from 'react-dom';
import ReactDataGrid from 'react-data-grid'


const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(2),
    minWidth:60,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(12),
  },
  
  critizen: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  margin: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),
  },
}));
export default function Account() {

  const { register, handleSubmit } = useForm();
  localStorage.setItem("register",JSON.stringify(handleSubmit));
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'));

  const [title, setTitle] = React.useState('');
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


 
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className= "BG">
        <div className = "main">
          <Fragment>
            <div className = {classes.root}>
            
                <Grid>
                <InputLabel htmlFor="title" className="sel" >Title</InputLabel>
                <FormControl className={classes.formControl}>
                  <select {...register("Title")} className="select">
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                </FormControl>
              
                <TextField {...register("First-Name", { required: true, maxLength: 20 })}
                  required id="first-name"
                  label="First name"
                  helperText="English" />


                <TextField {...register("Last-Name", { required: true, maxLength: 20 })}
                  required id="last-name"
                  label="Last name"
                  helperText="English" />

                </Grid>

              <Grid container justifyContent="space-left">
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker  {...register("Birthday")} className={classes.critizen}
                    required disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    required id="date-picker-inline"
                    label="Birthday"
                    value={selectedDate}
                    onChange={handleDateChange}
                    style={{ width: 150 }}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <InputLabel htmlFor="nationality" className="nation" >Nationality</InputLabel>
                <FormControl className={classes.formControl}>
                  <select {...register("Nationality")} className="select">
                    <option value="American">American</option>
                    <option value="Australian">Australian</option>
                    <option value="British">British</option>
                    <option value="Cambodian">Cambodian</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Filipino">Filipino</option>
                    <option value="Laotian">Laotian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Singaporean">Singaporean</option>
                    <option value="Thai">Thai</option>
                    <option value="Vietnamese">Vietnamese</option>
                  </select>
                </FormControl>
              </Grid>


                <Grid container justifyContent="space-left">

                <InputLabel htmlFor="Code" className="criti" >Critizen</InputLabel>
                <TextField className={classes.critizen}
                  {...register("critizen1")}
                    id="critizen1"
                    inputProps={{ maxLength: 1 }}
                    style={{ width: 30 }}
                    label = "x"
                  />
                <TextField className={classes.critizen}
                    disabled id="nan"
                    label="-"
                    style={{ width: 5 }}
                  />
                <TextField className={classes.critizen}
                  {...register("critizen2")}
                    id="critizen2"
                    inputProps={{ maxLength: 4 }}
                    style={{ width: 80 }}
                    label = "xxxx"
                  />
                <TextField className={classes.critizen}
                    disabled id="nan"
                    label="-"
                    style={{ width: 5 }}
                  />
                <TextField className={classes.critizen}
                  {...register("critizen3")}
                    id="critizen3"
                    inputProps={{ maxLength: 5 }}
                    style={{ width: 80 }}
                  label= "xxxxx"
                  />
                <TextField className={classes.critizen}
                    disabled id="nan"
                    label="-"
                    style={{ width: 5 }}
                  />
                <TextField className={classes.critizen}
                  {...register("critizen4")}
                    id="critizen4"
                    inputProps={{ maxLength: 2 }}
                    style={{ width: 40 }}
                  label= "xx"
                  />
                <TextField className={classes.critizen}
                  disabled id="nan"
                  label="-"
                  style={{ width: 5 }}
                />
                <TextField className={classes.critizen}
                  {...register("critizen5")}
                  id="critizen5"
                  inputProps={{ maxLength: 1 }}
                  style={{ width: 30 }}
                  label="x"
                />
                </Grid>


                <Grid container justifyContent="space-left">
                  <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <InputLabel htmlFor="Code" className="gen" >Gender</InputLabel>
                      
                    <FormControlLabel className={classes.selectEmpty}
                        value="Male"
                        id = "male"
                        control={<Radio color="primary" />}
                        label="Male"
                      />
                    <FormControlLabel className={classes.margin}
                        value="Female"
                        id = "female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                    <FormControlLabel className={classes.margin}
                        value="Unisex"
                        id = "unisex"
                        control={<Radio color="primary" />}
                        label="Unisex"
                        
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>


              <Grid container justifyContent="space-left">
                <Grid>
                  <InputLabel htmlFor="Code" className="se" >Code</InputLabel>
                    <FormControl className={classes.formControl}>
                    <select {...register("CODE")} className ="select">
                      <option value="+1">USA +1 </option>
                      <option value="+61">AU +61</option>
                      <option value="+44">UK +44</option>
                      <option value="+855">KH +855</option>
                      <option value="+1">CA +1</option>
                      <option value="+86">CN +86</option>
                      <option value="+63">PH +63</option>
                      <option value="+856">LA +856</option>
                      <option value="+81">JP +81</option>
                      <option value="+82">KR +82</option>
                      <option value="+65">SG +65</option>
                      <option value="+66">TH +66</option>
                      <option value="+84">VM +84</option>
                    </select>
                    </FormControl>
                

                    <TextField //number
                    {...register("numbertel", {
                      min: 3})}
                      required id="numbertel"
                      label="xxxxxxx"
                      helperText="number only"
                    inputProps={{ maxLength: 12}}
                    />
                </Grid>
              </Grid>

                
              <Grid container justifyContent="space-left">
                <Grid>
                  <TextField className={classes.critizen} //Passport number
                    {...register("passportnumber")}
                    id="Passport number"
                    label="Passport number"
                    helperText="number only"
                    key= "Passport number"
                    />
                </Grid>
              </Grid>


              <Grid container justifyContent="space-left">
                <Grid>
                  <TextField className={classes.critizen}
                  {...register("salary")}
                    id="salary"
                    label="Expect Saraly (BAHT)"
                    key = "salary"
                    helperText="number only"  
                    
                    />
                </Grid>
              </Grid>


              <Grid container justifyContent="center">
                <Grid>
                  <Button variant="contained" color="secondary" className={classes.critizen} type="submit" value ="submit">
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>

            </div>
          </Fragment>
        </div>



        
        <div className="space"></div>


        
        <div className="main2">
          <table>
            
          </table>

        </div>




      </div>
    </form>
  );
}