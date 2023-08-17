import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Highlighter(content) {
	const codeString = content;
	return (
		<SyntaxHighlighter language='javascript' style={dark}>
			{codeString}
		</SyntaxHighlighter>
	);
}
