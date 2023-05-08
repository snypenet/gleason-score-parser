import { useEffect, useState } from "react";
import usePostApi from "../Hooks/usePostApi";
import Loader from "../Components/Loader";

const Home = () => {
    const api = usePostApi('parse');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (api.error) {
            setError('Failed to make request');
        } else {
            setError('');
        }
    }, [api.error]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!note) {
            setError('Note is required in order to parse Gleason Scores');
            return;
        }

        api.submit({
            text: note.trim()
        });
    };

    const handleOnReset = () => {
        setError('');
        setNote('');
        api.reset();
    }

    return (<div className="row justify-content-center">
        <div className="col-med-6">
            <div className="text-danger">{error}</div>
            <form onSubmit={handleOnSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="encounter-note">Encounter Note</label>
                        <textarea className="form-control" id="encounter-note" name="encounter-note" value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" id="submit-button" disabled={api.loading}>
                            Submit
                            {api.loading &&
                                <Loader />}
                        </button>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-secondary" id="reset-button" disabled={api.loading} onClick={handleOnReset}>
                            Reset
                        </button>
                    </div>
                </div>

            </form>

            {api.result && !api.loading && !api.error && (<div className="row">
                <div className="col">
                    <h2>Result</h2>
                    <div className="text-start" dangerouslySetInnerHTML={{__html:api.result && api.result.replace(/\n/g, '</br>')}}></div>
                </div>
            </div>)}
        </div>
    </div>);
};

export default Home;