import {
  Breadcrumbs,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(({ spacing }) => ({
  rowActions: {
    marginBottom: spacing(2),
  },
  buttonAdd: {
    float: "right",
  },
}));

interface OwnProps {
  onAdd: () => void;
}

const Header = (props: OwnProps) => {
  const { onAdd } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      spacing={4}
      className={classes.rowActions}
    >
      <Grid item sm={12} md={6}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Typography color="textSecondary">Empresas</Typography>
          <Typography color="textPrimary">Listagem</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item sm={12} md={6}>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          className={classes.buttonAdd}
          onClick={onAdd}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
