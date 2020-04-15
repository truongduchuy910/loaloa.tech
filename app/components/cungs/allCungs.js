import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function allCungs({ allCungs, onChange }) {
  return (
    <Autocomplete
      onChange={(event, values) => onChange(values)}
      id="Cung"
      size="small"
      options={allCungs}
      getOptionLabel={option => {
        if (option) return option.name;
      }}
      filterSelectedOptions
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Cung"
          placeholder="Nhập Cung"
        />
      )}
    />
  );
}
