import styled from "styled-components"

const PostView = styled.View`
    padding: 15px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: "blue";
    border-bottom-style: solid;
`
const PostImage = styled.Image`
    width: 120px;
    height: 100px;
    border-radius: 12px;
    margin-right:10px;
`
const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 2px;
`

const PostDetails = styled.View`
    flex-direction: column;
    justify-content: center;
    flex: 1;
`

export const Post = ({title,createdAt, imageUrl}) => {
    return (
        <PostView>
            <PostImage
                source={{
                    uri:imageUrl,
                }}
            />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
            </PostDetails>
        </PostView>
    )
}
