import React from 'react';
import data from './test.json'

const Test = () => {
    return (
        <div>
            <h1>JSON Data</h1>
            {data.map ((info,index)=> {
                return (
                    <div>

                    <div><h3>{info.bootcamps}</h3></div>
                        <div>
                    
                                {info.camps.map((sub)=>
                                    <li>
                                        {sub.iraq}
                                    </li>
                                )}

                        </div>
                    </div>
                )

            })}
        </div>
        
    );
};

export default Test;

/* {data.map ((data,index)=>{
    return <h3>{info.title}</h3>
})} */