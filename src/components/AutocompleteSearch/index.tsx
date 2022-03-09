import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Crypto, searchCrypto } from '../../services/searchCrypto';

export const AutocompleteSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Crypto[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);

  const history = useHistory();

  const setData = async () => {
    setLoading(true);
    setOptions([]);
    clearTimeout(timeout.current as NodeJS.Timeout);
    timeout.current = setTimeout(async () => {
      const response = await searchCrypto({ searchTerm: inputValue });
      if (response.status === 200 && response.data) {
        setOptions(response.data);
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
    }
    if (inputValue) {
      setData();
    }
  }, [inputValue]);

  return (
    <Autocomplete
      id="crypto-search"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      inputValue={inputValue}
      onInputChange={(_, value) => {
        setInputValue(value);
      }}
      onChange={(_, value) => {
        if (value) {
          history.push(`/crypto/${value.slug}`);
        }
      }}
      clearOnBlur={true}
      clearOnEscape={true}
      autoHighlight={true}
      loading={loading}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
