import { cn } from '@/lib/utils';
import React from 'react'
import { Heading, SectionName } from '../typography/heading';
import { Button } from '../ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';
import SingleTestimonial from '../ui/singe-testimonial';

const Testimonials = ({
    className
    }: {
    className?: string;
}) => {
  return (
    <section className={cn("", className)}>
        <div className='flex justify-between items-center mb-[70px]'>
            <div className='space-y-3'>
                <SectionName>Testimonial</SectionName>
                <Heading>What our Clients say About us</Heading>

            </div>
        <Button variant='outline' size='lg' className='h-fit'>View More <FaArrowRightLong /> </Button>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-[94px]'>
            <SingleTestimonial
                name='John Doe'
                testimonial={`<span class='font-bold'>"Exceptional Care and Support" </span> We couldn't be happier with the childcare service! The staff are incredibly attentive and caring, always ensuring that our child feels safe and loved.`}
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />
                        <SingleTestimonial
                name='John Doe'
                testimonial='<Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />
                        <SingleTestimonial
                name='John Doe'
                testimonial={`<span class='font-bold'>"Exceptional Care and Support" </span> We couldn't be happier with the childcare service! The staff are incredibly attentive and caring, always ensuring that our child feels safe and loved.`}
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />
                        <SingleTestimonial
                name='John Doe'
                testimonial='<Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />            <SingleTestimonial
                name='John Doe'
                testimonial={`<span class='font-bold'>"Exceptional Care and Support" </span> We couldn't be happier with the childcare service! The staff are incredibly attentive and caring, always ensuring that our child feels safe and loved.`}
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />
                        <SingleTestimonial
                name='John Doe'
                testimonial='<Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                imgSrc='/images/testimonals-1.png'
                desigantion='Consultant'
                companyName='Interventional Cardiologist'
                rating={5}
            />
        </div>
    </section>
  )
}

export default Testimonials