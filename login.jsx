import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import MetaHeader from '../components/metaHeader'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import BeautifulInput from '../components/input'
import Link from 'next/link'
import { useRouter } from 'next/router'

const meta = {
  title: 'Login | MWIT Open House 2022',
  url: 'login',
  description: 'เข้าสู่ระบบ | MWIT Open House 2022',
  img: 'ogimage.png',
}
