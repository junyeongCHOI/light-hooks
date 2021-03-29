import { useState, useRef } from "react";
import axios from "axios";

const initialConfig = { preventOverlap: true, reset: false };

/**
 * axios hook
 * 2021.03.29 junyeong CHOI
 * @param {string} url
 * @param {object} initialState default []
 * @param {object} config { preventOverlap?: boolean, reset?: boolean } preventOverlap: default true, reset: default false
 * @returns {object} { get, post, data, error, isLoading }
 */

const useAxios = (url, initialState = [], config = {}) => {
  const { current: configRef } = useRef({ ...initialConfig, ...config });
  const [data, setData] = useState(initialState);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const axiosWrapper = async (callback) => {
    if (configRef.preventOverlap && isLoading) {
      return;
    }

    try {
      setLoading(true);

      if (configRef.reset) {
        setData(initialState);
      }

      const res = await callback();
      setData(res.data);

      setLoading(false);
    } catch (error) {
      console.error(error);

      setError(error);

      setLoading(false);
    }
  };

  const get = async (configs) =>
    await axiosWrapper(async () => await axios.get(url, configs));

  const post = async (body, configs) =>
    await axiosWrapper(async () => await axios.post(url, body, configs));

  return { get, post, data, error, isLoading };
};

export default useAxios;
