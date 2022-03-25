import {Button, Divider, Grid, GridItem, Heading, Input, InputGroup, InputLeftAddon, Text} from "@chakra-ui/react";
import {useState} from "react";


export default function Home() {
    const [name, setName] = useState("");
    const [selectedFile,setSelectedFile] =useState(null);
    const Submit = () => {

    }
    return (
        <div>
            <Heading>Dindr</Heading>
            <Divider style={{marginTop: '10px'}}/>
            <Grid templateRows={'repeat(5,1fr)'} templateColumns={'repeat(10,1fr)'}>
                <GridItem rowStart={2} colStart={4} colEnd={8}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1vh'}}>
                        <Heading>Register</Heading>
                        <Text>Name</Text>
                        <Input placeholder={"Username"}/>
                        <Text>Image</Text>
                        <input onChange={(e) => setSelectedFile(e.target.files[0])} type={'file'}/>
                        <Button onClick={Submit}>Sign Up</Button>
                    </div>
                </GridItem>
            </Grid>
        </div>
    );
}
