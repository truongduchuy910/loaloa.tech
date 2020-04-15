import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function allTinhs({ allTinhs, onSelect }) {
  return (
    <Autocomplete
      onChange={(event, values) => onSelect(values)}
      multiple
      id="PhuTinh"
      size="small"
      options={allTinhs}
      getOptionLabel={option => {
        if (option) return option.name;
      }}
      filterSelectedOptions
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Chính Tinh"
          placeholder="Nhập Chính Tinh"
        />
      )}
    />
  );
}
