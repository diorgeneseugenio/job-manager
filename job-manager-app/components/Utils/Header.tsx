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
  paths: string[];
  onAdd?: () => void;
  hasAddButton?: boolean;
}

const Header = (props: OwnProps) => {
  const { paths, onAdd = () => {}, hasAddButton = false } = props;

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
      <Grid item sm={12} md={hasAddButton ? 6 : 12}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          {paths.map((path, index) => (
            <Typography
              color={
                index + 1 != paths.length ? "textSecondary" : "textPrimary"
              }
              key={index}
            >
              {path}
            </Typography>
          ))}
        </Breadcrumbs>
      </Grid>
      {hasAddButton && (
        <Grid item sm={12} md={6}>
          <IconButton
            color="primary"
            className={classes.buttonAdd}
            onClick={onAdd}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
