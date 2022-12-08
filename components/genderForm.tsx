import {
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { IFilter } from "../ts";
import styles from "../styles/GenderForm.module.css";

export function GenderForm({
  filter,
  onFilterChange,
}: {
  filter: IFilter;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Container className={styles.container}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.male}
              name="male"
              onChange={(e) => onFilterChange(e)}
            />
          }
          label="Male"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={filter.female}
              name="female"
              onChange={(e) => onFilterChange(e)}
            />
          }
          label="Female"
        />
      </FormGroup>
    </Container>
  );
}
