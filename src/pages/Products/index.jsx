import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// core components
import Header from "../../components/HeaderLogged/Header.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardShelf from "../../components/CardShelf/CardShelf.js";
import Carousel from "react-slick";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import s1 from '../../assets/images/temp/salao1.jpg';
import s2 from '../../assets/images/temp/salao2.jpeg';
import s3 from '../../assets/images/temp/salao3.jpg';
import s4 from '../../assets/images/temp/salao4.jpg';
import image1 from "../../assets/images/temp/banner1.jpg";
import image2 from "../../assets/images/temp/banner2.jpg";

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
     if(!email || !password) {
       toast.error('Preencha os campos para efetuar login!!!');
       return;
     }

     Axios.post(`http://localhost:3000/users/login`, {email, password})
      .then(response => {
        const { data } = response;
        if(data.email === "error") {
            toast.error("Senha inválida!!!");
            return;
        }

        history.push('/shelf');

      })
      .catch(error => {
        toast.error('Usuário não encontrado!!!');
        return;
      })
  }
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  
  const { ...rest } = props;

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }
  ];

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  return (
    <div>
      <ToastContainer />
      <Header
        absolute
        color="transparent"
        brand={LogoHorizontal}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
            background: "rgb(255,31,102)",
            background: "linear-gradient(0deg, rgba(255,31,102,0.6516807406556373) 58%, rgba(148,33,65,1) 100%)"
        }}
      >
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={4}>
                  <Autocomplete
                      id="filter-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      filterOptions={filterOptions}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s1} title="LRO Cabelo Estética" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s2} title="Atelier Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s3} title="Jacques Janine Sorocaba" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s1} title="LRO Cabelo Estética" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s2} title="Atelier Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s3} title="Jacques Janine Sorocaba" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>  
      <Footer whiteFont />
      </div>
    </div>
  );
}
