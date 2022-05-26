import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mt-5'>
            <h1 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h1>
            <p>Avoid inline functions as much as possible.Remember that Immutability is the key to avoid unnecessary re-renders.Always render hidden components like Modals and Dropdowns conditionally. ...
                Always call multiple APIs parallelly.</p>
            <br /><br />

            <h1 className='text-2xl font-bold'> What are the different ways to manage a state in a React application?</h1>
            <p>There are four main types of state you need to properly manage in your React apps:</p>
            <p>
                1. Local state.
                <br />
                2. Global state.
                <br />
                3.Server state.
                <br />
                4. URL state.
            </p>
            <br /><br />
            <h1 className='text-2xl font-bold'>How does prototypical inheritance work?</h1>
            <p>
                প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে। ঐতিহ্যগতভাবে, একটি বস্তুর প্রোটোটাইপ পেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি।
            </p>
            <br /><br />
            <h1 className='text-xl font-bold'>
                Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
            </h1>
            <p>
                when you mutate the state directly and call setState() with an empty object. The previous state will be polluted with your mutation. Due to which, the shallow compare and merge of two states will be disturbed or won't happen, because you'll have only one state now
            </p>
            <br /><br />
            <h1 className='text-2xl font-bold'> What is a unit test?</h1>
            <p>
                Definition: This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.
            </p>
            <br /><br />
            <h1 className='text-2xl font-bold'>
                Why should write unit tests?
            </h1>
            <p>
                Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.
            </p>
        </div>
    );
};

export default Blogs;