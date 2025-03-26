import type {To} from 'react-router';

import {hierarchy} from '@Router';
import {useCallback} from 'react';
import {useNavigate, useNavigationType} from 'react-router';

export const useBack = () => {
  const navigate = useNavigate();
  const navigateType = useNavigationType();

  return useCallback(
    (back?: To) => {
      const historyState = window.history.state;
      const idx = Number(historyState?.idx);

      if (idx > 0 || (isNaN(idx) && navigateType.includes('PUSH'))) {
        return navigate(-1);
      }

      navigate(back || hierarchy.home.path);
    },
    [navigate, navigateType]
  );
};
