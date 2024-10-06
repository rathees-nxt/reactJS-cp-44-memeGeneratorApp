import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  FormMemeContainer,
  Label,
  Input,
  Select,
  Option,
  Button,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageInput: '',
    headerTextInput: '',
    footerTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    backgroundImage: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({headerTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({footerTextInput: event.target.value})
  }

  onChangefontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()

    const {
      backgroundImageInput,
      headerTextInput,
      footerTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      activeFontSizeId: activeFontSizeOptionId,
      topText: headerTextInput,
      bottomText: footerTextInput,
      backgroundImage: backgroundImageInput,
    })
  }

  renderFormMemeContainer = () => {
    const {
      backgroundImageInput,
      headerTextInput,
      footerTextInput,
      activeFontSizeOptionId,
    } = this.state

    return (
      <FormMemeContainer onSubmit={this.generateMeme}>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          onChange={this.onChangeBackgroundImage}
          value={backgroundImageInput}
          id="imageUrl"
          type="text"
          placeholder="Enter the Image URL"
        />
        <Label htmlFor="top">Top Text</Label>
        <Input
          onChange={this.onChangeTopText}
          value={headerTextInput}
          id="top"
          type="text"
          placeholder="Enter the Top Text"
        />
        <Label htmlFor="bottom">Bottom Text</Label>
        <Input
          onChange={this.onChangeBottomText}
          value={footerTextInput}
          id="bottom"
          type="text"
          placeholder="Enter the Bottom Text"
        />
        <Label htmlFor="font-size">Font Size</Label>
        <Select
          id="font-size"
          value={activeFontSizeOptionId}
          onChange={this.onChangefontSizeOptionId}
        >
          {fontSizesOptionsList.map(item => (
            <Option key={item.optionId} value={item.optionId}>
              {item.displayText}
            </Option>
          ))}
        </Select>
        <Button type="submit">Generate</Button>
      </FormMemeContainer>
    )
  }

  renderMemeContainer = () => {
    const {activeFontSizeOptionId, topText, bottomText, backgroundImage} =
      this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
        <Text activeFontSizeOptionId={activeFontSizeOptionId}>{topText}</Text>
        <Text activeFontSizeOptionId={activeFontSizeOptionId}>
          {bottomText}
        </Text>
      </MemeContainer>
    )
  }

  render() {
    return (
      <>
        <AppContainer>
          <MemeGeneratorContainer>
            <Heading>Meme Generator</Heading>
            <FormAndMemeContainer>
              {this.renderFormMemeContainer()}
              {this.renderMemeContainer()}
            </FormAndMemeContainer>
          </MemeGeneratorContainer>
        </AppContainer>
      </>
    )
  }
}

export default MemeGenerator
