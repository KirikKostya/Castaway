import { Modal } from 'antd';
import React, {useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm{
    name: string
    email: string
    status?: boolean 
}
const Newsletter: React.FC = () => {

    const [modalState, setModalState] = useState<IForm>({name: '', email: '', status: false});

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IForm>({mode: 'onChange'});

    const submite: SubmitHandler<IForm> = (data) => {
        setModalState({name: data.name, email: data.email, status: true})
        reset()
    }

  return (
    <article className='max-w-[1250px] w-full lg:mt-[100px] mt-0'>
        <div className='lg:flex-row md:flex-row sm:flex-row flex flex-col lg:items-center md:items-center sm:items-center items-stretch justify-around bg-black py-[45px] px-[25px] text-white rounded-[32px] lg:mx-[60px] md:mx-[50px] sm:mx-[40px] mx-[30px]'>
            <div className='flex flex-col items-strach'>
                <p className='text-[#118DA8] lg:text-[15px] md:text-[13px] text-[10px]'>Email Newsletter</p>
                <h2 className='tracking-[2.88px] lg:leading-[79px] md:leading-[60px] sm:leading-[40px] leading-[35px lg:text-[72px] md:text-[60px] sm:text-[45px] text-[30px]'>Subscribe<br className='lg:block md:block sm:block hidden'/> for updates</h2>
            </div>
            <form className='w-full text-white flex flex-col lg:flex-[.5] md:flex-[.6] sm:flex-[.75] flex-[.8] items-start' onSubmit={handleSubmit(submite)}>
                <input type="text" autoComplete='false' className='w-full h-[50px] bg-[#191919] rounded-[6px] my-[10px] pl-[20px]' placeholder='Name' {...register('name', { required: 'Обязательное поле!' }) } />
                {errors.name?.message && <span className='text-[red] text-[8pt]'>{errors.name.message}</span>}
                <input type="text" autoComplete='false' placeholder='Email' className='w-full h-[50px] bg-[#191919] rounded-[6px] my-[10px] pl-[20px]'
                    {
                        ...register('email', {
                            required: 'Обязательное поле!',
                            pattern: {
                                value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/iu,
                                message: 'Введите правильный формат Email'
                            }
                        })
                    }
                />
                {errors.email?.message && <span className='text-[red] text-[8pt]'>{errors.email.message}</span>}
                <button className='text-[10pt] p-[10px] bg-[#118DA8] rounded-[6px]'>
                    Submite
                </button>
            </form>
        </div>
        <Modal open={modalState.status} title={<p>Name: {modalState.name}<br/> Mail: {modalState.email}</p>} onOk={()=>setModalState(pre=>{return {...pre, status: !pre}})} okButtonProps={{style: {background: '#1677ff'}}} cancelButtonProps={{style: {display: 'none'}}} closable={false} centered={false} />
    </article>
  )
}

export default Newsletter;