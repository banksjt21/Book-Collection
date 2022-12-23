/*  ===========================================================================
//  books-api.js
//  ===========================================================================
//  - 
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */




/*  ===========================================================================
//  COMPONENTS
//  =======================================================================  */
export default function Search() {

    const handleSubmit = () => {
        
    }


    return (
        <div>
            <h2>Search</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Title</label><br />
                <input type="text" name="title" onChange={handleChange} required /><br />
                <label>Author</label><br />
                <input type="text" name="author" onChange={handleChange} /><br />
                <label>Publisher</label><br />
                <input type="text" name="publisher" onChange={handleChange} /><br />
                <label>Subject</label><br />
                <input type="text" name="subject" onChange={handleChange} /><br />
                <label>ISBN</label><br />
                <input type="text" name="isbn" onChange={handleChange} /><br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    )
}